import './../App.css';


function Item({name, label}) {
    return (
        <div className='flex flex-column'>
            <label>{label}</label>
            <span className='info'>{name}</span>
        </div>
    )
}

export default Item;