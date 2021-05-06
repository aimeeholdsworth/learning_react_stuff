const Shopping = ({items}) => {
    const Display = ({item}) => <li>{item}</li>

    return(
        <ul className="previousSearch">
            {items.map((item, i) =>(
                <Display
                    item={item}
                    key={i}
                    />
            ))}
        </ul>
    );
}

export default Shopping;