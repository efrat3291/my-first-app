import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <ul>
        <li><Link to="/"> ToDoList</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact </Link></li>
      </ul>
    </aside>
  );
}
