import React from 'react';

const SearchBox = ({ searchChange}) => {
	return (
		<div className='pa1'>
			<input 
				className=" pa2 b--green bg-light-blue" 
				type='search' 
				placeholder='search robots' 
				onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBox;