const CountryListItem = ({countryName, onClick}) => {
    
    const addvisitedCountry = ()=>{
        const name = countryName
        console.log(name);
        onClick(name)
    }
    
    return (
        <li>
            {countryName}
            <button onClick={addvisitedCountry}>Select</button>
        </li>
    );
}

export default CountryListItem;