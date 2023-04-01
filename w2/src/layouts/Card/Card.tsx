import React from 'react';
import classes from './Card.module.scss';

interface MovieCardProps {
  cover: string;
  name: string;
  author: string;
  type: string;
  dateArrived: Date;
  isUsed: boolean;
  readingNow: string;
}

class MovieCard extends React.Component<MovieCardProps> {
  constructor(props: MovieCardProps) {
    super(props);
    this.state = {
      isHovered: false,
    };
  }

  handleMouseEnter = () => {
    this.setState({
      isHovered: true,
    });
  };

  handleMouseLeave = () => {
    this.setState({
      isHovered: false,
    });
  };

  render() {
    const { name, author, type, isUsed, readingNow, dateArrived } = this.props;

    return (
      <div
        className={classes.cardWrap}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <div className={classes.descriptBlock}>
          <div className={classes.cover}></div>
          <h2>{name}</h2>
          <p>{author}</p>
          <p>{type}</p>
          <p>{isUsed}</p>
          <div>
            <p>currently reading</p>
            <p>{readingNow}</p>
          </div>
          <div>
            <p>date arrived</p>
            <p>{dateArrived.toString()}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
