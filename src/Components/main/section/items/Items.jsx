import React from 'react';
import PropTypes from 'prop-types';

import { hightRating } from '../../../../selectors/Selectors';
import imgLoading from '../../../../public/images/gearLoading.svg';

const Item = React.lazy(() => import('./Item'));

class Items extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      maxRating: false,
      withImg: false,
      sortByName: false,
      sortByDate: false,
      scrollTo: 0,
      itemsAmount: 3,
      title: 'none',
    };
  }

  async componentDidMount() {
    await this.setState(state => ({
      page: state.items.length / state.itemsAmount || 1,
    }));

    if (this.state.items.length < 1) {
      await this.props.getProducts(
        this.state.itemsAmount,
        this.state.withImg,
        this.state.sortByName,
        this.state.sortByDate,
        this.state.page,
        this.state.title
      );
      await this.setState(state => ({
        page: state.items.length / state.itemsAmount,
      }));
    } else {
      await this.props.getProducts(
        this.state.itemsAmount,
        this.state.withImg,
        this.state.sortByName,
        this.state.sortByDate,
        this.state.page,
        this.state.title
      );
      await this.setState(state => ({
        page: state.items.length / state.itemsAmount,
      }));
    }

    await window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  static getDerivedStateFromProps(props, state) {
    if (!state.maxRating) {
      // console.log(props);
      // console.log(state);
      return {
        items: props.state.items,
        user: props.state.user,
        page: props.state.items.length / state.itemsAmount || 1,
      };
    }

    return { items: hightRating(state), user: props.state.user };
  }

  handleScroll = async () => {
    if (
      window.innerHeight + window.scrollY
      >= document.body.offsetHeight - 100
    ) {
      if (this.state.scrollTo < document.body.offsetHeight) {
        const newPage = Math.floor(this.state.page + 1);
        await this.setState((state, props) => ({
          scrollTo: Number(document.body.offsetHeight),
          page: newPage,
        }));

        await this.props.getProducts(
          this.state.itemsAmount,
          this.state.withImg,
          this.state.sortByName,
          this.state.sortByDate,
          newPage,
          this.state.title
        );
      }
    }
  };

  maxRating = () => {
    this.state.maxRating
      ? this.setState({
        maxRating: false,
      })
      : this.setState({ maxRating: true });
  };

  withImg = async () => {
    await this.props.deleteStateItems();
    (await this.state.withImg)
      ? this.setState({ withImg: false })
      : this.setState({ withImg: true });

    this.props.getProducts(
      this.state.itemsAmount,
      this.state.withImg,
      this.state.sortByName,
      this.state.sortByDate,
      1,
      this.state.title
    );
  };

  sortByName = async () => {
    await this.props.deleteStateItems();
    (await this.state.sortByName)
      ? this.setState({
        sortByName: false,
      })
      : this.setState({ sortByName: true, sortByDate: false });

    this.props.getProducts(
      this.state.itemsAmount,
      this.state.withImg,
      this.state.sortByName,
      this.state.sortByDate,
      1,
      this.state.title
    );
  };

  sortByDate = async () => {
    await this.props.deleteStateItems();
    (await this.state.sortByDate)
      ? this.setState({
        sortByDate: false,
      })
      : this.setState({ sortByDate: true, sortByName: false });

    this.props.getProducts(
      this.state.itemsAmount,
      this.state.withImg,
      this.state.sortByName,
      this.state.sortByDate,
      1,
      this.state.title
    );
  };

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  searchProducts = async (event) => {
    event.preventDefault();

    await this.props.deleteStateItems();

    console.log(this.state);

    await this.props.getProducts(
      this.state.itemsAmount,
      this.state.withImg,
      this.state.sortByName,
      this.state.sortByDate,
      1,
      this.state.title
    );
  };

  render() {
    return (
      <>
        <label htmlFor="ratingCheckBox">Предметы с наивысшим рейтингом</label>
        <input
          id="ratingCheckBox"
          onChange={this.maxRating}
          className=""
          type="checkbox"
        />
        <div>
          <label htmlFor="imgCheckBox">Только с картинкой</label>
          <input
            id="imgCheckBox"
            onChange={this.withImg}
            className=""
            type="checkbox"
          />
        </div>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Сортировка
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <div>
              <input
                className="dropdown-item"
                value="По имени"
                onClick={this.sortByName}
                type="button"
                name="name"
              />
            </div>
            <div>
              <input
                className="dropdown-item"
                value="По дате последнего обновления"
                onClick={this.sortByDate}
                type="button"
                name="date"
              />
            </div>
          </div>
        </div>

        <form>
          <label>
            Title:
            <input
              name="title"
              className="m-2"
              type="text"
              id="title"
              onChange={this.handleInput}
            />
          </label>
          <button type="button" onClick={this.searchProducts}>
            Отправить
          </button>
        </form>

        <div className="card-column">
          <React.Suspense fallback={<img alt="Loading..." src={imgLoading} />}>
            <Item addRating={this.props.addRating} state={this.state} />
          </React.Suspense>
        </div>
      </>
    );
  }
}

export default Items;

Items.propTypes = {
  addRating: PropTypes.func,
  deleteStateItems: PropTypes.func,
  getProducts: PropTypes.func,
  state: PropTypes.shape({
    item: PropTypes.arrayOf(PropTypes.object),
    user: PropTypes.object,
  }),
};

Items.defaultProps = {
  state: {},
  addRating: () => {},
  getProducts: () => {},
  deleteStateItems: () => {},
};
