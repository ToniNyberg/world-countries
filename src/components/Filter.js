import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import { InputAdornment } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import { grey } from '@material-ui/core/colors';

const Filter = () => {
    return (
        <section className="filter">
            <form className="form-control">
                <Input type="search" name="search" id="search" 
                placeholder="Search for a country" startAdornment={
                    <InputAdornment position="start">
                      <SearchIcon className="search-icon" style={{ color: grey[50] }}/>
                    </InputAdornment>
                  }/>
            </form>

            <div className="region-filter">
                <select name="select" id="select" className="select">
                    <option value="Filter by region">Filter by region</option>
                    <option value="Africa">Africa</option>
                    <option value="America">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
        </section>

    )
}

export default Filter
