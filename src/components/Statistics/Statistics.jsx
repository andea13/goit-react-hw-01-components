import PropTypes, { shape } from 'prop-types';

export const Statistics = ({ title, stats }) => (
  <section className="statistics">
    <h2 className="title">{title}</h2>
    <ul className="stat-list">
      {stats.map(dataItem => (
        <li className="item" key={dataItem.id}>
          <span className="label">{dataItem.label}</span>
          <span className="percentage">{dataItem.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
