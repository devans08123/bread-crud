const React = require('react')
const Default = require('./layouts/default')

function Show({ bread, index }) {
    
    return (
        <Default>
            <h3>{bread.name}</h3>
            <p>
                and it 
                {
                    bread.hasGluten ? <span> does </span> : <span> does not </span>
                }
                have gulten
            </p>
            <img src={bread.image} alt={bread.name} />
            <a href={`/breads/${index}/edit`}>
                <button>Edit</button>
            </a>
            <li>
            <form action={`/breads/${index}?_method=DELETE`} method='POST'>
                <input type='submit' value='DELETE' />
            </form>
                <a href={'/breads'} >Go Home</a>
            </li>
        </Default>
    )
}

module.exports = Show