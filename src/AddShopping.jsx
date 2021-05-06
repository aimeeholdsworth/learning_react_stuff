const AddShopping =({submitHandler, newItem, handleAdd, handleRemove}) => {
    return (
        <form onSubmit={submitHandler}>
            <input placeholder="New shopping item"
            type="text"
            onChange={newItem} />

            <button type="button"
            onClick={handleAdd}> Add Item</button>

            <button type="button"
            onClick={handleRemove}> Remove Item</button>

<FontAwesomeIcon icon={faChevronRight} onClick={() => handleQuantityIncrease(index)} />
        </form>
    );
}

export default AddShopping;