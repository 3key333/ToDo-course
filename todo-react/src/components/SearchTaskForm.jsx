import Field from "./Field"

const SearchTaskForm = (props)=>{

   const{
      searchQuery,
      setSearchQuery,
   } = props

    return(
    <form
      className="todo__form"
      onSubmit={(event)=>event.preventDefault()} 
   >
       <Field
          className = 'todo-field'
          label='Search task'
          id = 'search-tasks'
          type='search'
          value={searchQuery}
          onInput={(event) => setSearchQuery(event.target.value)}
       />
    </form>
    )
}

export default SearchTaskForm