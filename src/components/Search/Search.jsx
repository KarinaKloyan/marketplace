import './Search.css'

function Search(){
    return (
    <form className="search">
      <input type="text" placeholder="Search..." />
      <button type="submit">Search</button>
    </form>
    )
}

export default Search