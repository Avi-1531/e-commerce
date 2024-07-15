import React, { useState } from 'react'
import styled from 'styled-components';
import { useFiltercontext } from '../context/Filtercontext';
import { FaCheck } from 'react-icons/fa'
import Formatprice from './Formatprice';
import { Button } from '../styles/Button';


const FilterSection = () => {
  const { filters: { text, price, maxprice, minprice }, updatefiltervalue, allproducts,clearfilters } = useFiltercontext();


  const uniquedata = (data, property) => {
    let newval = data.map((curelem) => {
      return curelem[property]
    })

    if (property === "colors") {
      newval = ['All', ...new Set([].concat(...newval))]
    }
    // else if (property === "price") {
    //   newval = [...new Set([].concat(...newval))]
    //   const max = Math.max(...newval);
     
    //   console.log(max)
    //   return max
    // }


    else {

      newval = ['All', ...new Set(newval)]
    }


    // console.log(newval)


    return newval
  }




  // calling it 
  const categoryonlydata = uniquedata(allproducts, "category");
  const companyonlydata = uniquedata(allproducts, "company");
  const coloronlydata = uniquedata(allproducts, "colors");
  // const priceonlydata = uniquedata(allproducts, "price");
  // console.log(priceonlydata)
  const [categoryelem, setcategoryelem] = useState(categoryonlydata[0])
  const [colorelem, setcolorelem] = useState()
  

  return (
    <Wrapper className='section'>
      <div className="filter-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="text" name="text" value={text} onChange={updatefiltervalue} placeholder='SEARCH' />
        </form>
      </div>
      <div className="filter-category">
        <h3>Category</h3>
        <div>

          {categoryonlydata.map((curelem, index) => {

            return (

              <button key={index} type='button' name='category' value={curelem} className={categoryelem === curelem ? "active" : ""} onClick={(e) => { updatefiltervalue(e); setcategoryelem(curelem) }} >{curelem}</button>)
          })}
        </div>
      </div>
      <div className="filter-company">
        <h3>Company</h3>
        <form action='#'>
          <select name="company" id="company" className='filter-company--select active' onClick={(e) => updatefiltervalue(e)}>
            {companyonlydata.map((curelem, index) => {
              return (<option value={curelem} name="company" key={index}>{curelem}</option>)
            })}
          </select>
        </form>
      </div>

      <div className="filter-color">

        <h3>Colors:</h3>
        <div className="filter-color-style">
          {coloronlydata.map((curcolor, index) => {
            if (curcolor !== 'All') {

              return <button type='button' key={index} name='color' style={{ backgroundColor: curcolor }} value={curcolor} className={colorelem === curcolor ? "btnStyle active" : "btnStyle"} onClick={(e) => { updatefiltervalue(e); setcolorelem(curcolor) }}>
                {colorelem === curcolor ? <FaCheck className='checkStyle' /> : null}
              </button>
            }
            return <button type='button' key={index} name='color' value={curcolor} style={{ backgroundColor: 'white', border: 'none' }} className={colorelem === curcolor ? "mystyle" : ""} onClick={(e) => {
              updatefiltervalue(e);
              setcolorelem(curcolor);
            }}>
              {curcolor}
            </button>
          })}

        </div>

      </div>

      {/* price filter  */}
      <div className="filter_price">
        <h3>Price</h3>
        <p><Formatprice price={price} /></p>
        <input type="range" name='price'
          min={minprice} max={maxprice}  value={price ?? '0'} onChange={updatefiltervalue}></input>
          
          
       
      </div>

      {/* clear filters  */}
          <div className="filter-clear">
            <Button className='btn' onClick={clearfilters}>Clear Filters</Button>
          </div>

    </Wrapper>

  )
}
const Wrapper = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  h3 {
    padding: 2rem 0;
    font-size: bold;
  }

  .filter-search {
    input {
      padding: 0.6rem 1rem;
      width: 80%;
    }
  }

  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;
     

      button {
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        text-transform: capitalize;
        cursor: pointer;

        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
        
      }

      .active {
        // border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
        opacity:1;
        
      }
    }
  }

  .filter-company--select {
    padding: 0.3rem 1.2rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
  }

  .filter-color-style {
    display: flex;
    justify-content: center;
  }

  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    // background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }

  .mystyle{
    color:rgb(98 84 243);
  }

  .filter_price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }

  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .filter-clear .btn {
    background-color: #ec7063;
    color: #000;
  }
`;

export default FilterSection
