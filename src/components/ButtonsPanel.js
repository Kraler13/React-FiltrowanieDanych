import './ButtonsPanel.css';

const ButtonsPanel = (props) => {
  return (
    <div className="buttonsPanel">
      <button onClick={()=>props.showList('admins')}>Wyśwetl tylko adminów {props.stepValue}</button>
      <button onClick={()=>props.showList('users')}>Wyświet tylko userów</button>
      <button onClick={()=>props.showList('all')}>Wyswietl wszytskich</button>
    </div>
  );
};

export default ButtonsPanel;
