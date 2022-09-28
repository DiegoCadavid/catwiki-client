import React from 'react'

const CatListItem = ({ title = "", content = "", punctuation }) => {

    return (
        <li>
            <b> {title} </b>
            {!punctuation && content}

            {/* Puntuacion*/} 
            {punctuation && <span check={ punctuation > 0 ? 'true' : 'false' }/>}
            {punctuation && <span check={ punctuation > 1 ? 'true' : 'false' }/>}
            {punctuation && <span check={ punctuation > 2 ? 'true' : 'false' }/>}
            {punctuation && <span check={ punctuation > 3 ? 'true' : 'false' }/>}
            {punctuation && <span check={ punctuation > 4 ? 'true' : 'false' }/>}
        </li>
    )
}

export default CatListItem