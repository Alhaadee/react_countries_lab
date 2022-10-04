const CountryListItem = ({countryName, onClick}) => {
    return (
        <li>
            {countryName}
            <button onClick={onClick}>Select</button>
        </li>
    );
}

export default CountryListItem;