import CountryListItem from "./CountryListItem";

const CountriesList = ({countryNames,onClick}) => {
    return(
        <>
            <h2>CountriesList!</h2>
            <ul>
                {
                countryNames.map((countryName,index)=>{
                    return (
                        <CountryListItem key={countryName + index} countryName={countryName} onClick={onClick}/>
                    )
                })
                }
            </ul>
        </>
    );
}

export default CountriesList;