import React, { useState, useEffect } from "react";
import Input from "../miniComponents/input";
import Button from "../miniComponents/button";
import ProductPanel from "../bigComponents/productPanel";
import Dropdown from "../miniComponents/Dropdown";
import Content from "../miniComponents/Categories";
import PriceFilter from "../miniComponents/priceFilter";
import { LuTriangle, LuMenu, LuCross  } from "react-icons/lu";
import useProducts from "../miniComponents/useProducts";
import ProductPurchasePage from "../bigComponents/ProductPurchasePage";
export default function HomePage({searchedProduct, setSearchedProduct}){
    
    const products = useProducts();
    

    const allLocations = new Set(products.map(p => p.location));
    const allCategory = new Set(products.map(p => p.category));
    const allPrice = products.length ? new Set(products.map(p => p.price)) : new Set();
    const maxPrice = allPrice.size ? Math.max(...allPrice) : 0;


    
    const [category,setCategory] = useState("")
    const [location, setLocation] = useState("")
    const [filter, setFilter] = useState(false)
    const [priceFilter, setPriceFilter] = useState(maxPrice)
    const [menu, setMenu] = useState(false)
    const [productClicked, setProductClicked] = useState([])
    const [purchasePage, setPurchasePage] = useState(false)
    function handleProduct(product){
        setPurchasePage(true)
        setProductClicked(product)
    }
    
    useEffect(()=>{
        console.log(productClicked)
    },[productClicked])


    useEffect(() => {
    if (products.length) {
        const max = Math.max(...products.map(p => p.price));
        setPriceFilter(max);
    }
    }, [products]);


    function getRelevance(product, query) {
    const q = query.toLowerCase();
    let score = 0;

    if (product.name.toLowerCase() === q) score += 100;       
    else if (product.name.toLowerCase().startsWith(q)) score += 50; 
    else if (product.name.toLowerCase().includes(q)) score += 25;  

    if (product.description.toLowerCase().includes(q)) score += 10;
    if (product.category.toLowerCase().includes(q)) score += 5;
    if (product.location.toLowerCase().includes(q)) score += 5;
    if (product.location.toLowerCase().includes(q)) score += 5;

    return score;
    }
    const query = searchedProduct.trim();
    let filteredProducts = products.filter(product => {
    const price = parseFloat(product.price);
    const selectedCategory = category.toLowerCase() === "all" ? "" : category.toLowerCase();
    const selectedLocation = location.toLowerCase() === "all" ? "" : location;
    return (
        (selectedCategory === "" || product.category === selectedCategory) &&
        (selectedLocation === "" || product.location === selectedLocation) &&
        price >= 0 &&
        price <= priceFilter
    );
    });

    if (query) {
    filteredProducts = filteredProducts
        .map(product => ({ product, score: getRelevance(product, query) }))
        .filter(item => item.score > 0) 
        .sort((a, b) => b.score - a.score) 
        .map(item => item.product); 
    }
    return(
        <div className="w-full h-full bg-orng-2xsm">
            <div className="fixed left-0 top-0 h-20 w-full bg-orng-xsm flex items-center justify-center z-29 sm:justify-between flex-row border-b-2 border-orng-sm">
                <div className=" text-2xl p-4 w-1/2 sm:w-auto flex flex-row items-center justify-start gap-2">
                    Filters
                    {<LuTriangle onClick={()=>{setFilter(!filter)}}  className={`duration-600 w-6 h-6 cursor-pointer transform ${filter ? "rotate-90" : "rotate-270" }`}/> }
                </div>
                <div className="w-full lg:w-1/3 h-full hidden sm:flex flex-row-reverse items-center justify-end ">
                    <div className=" min-w-[400px] w-full max-w-[700px] h-[full] hidden sm:flex items-center justify-center">
                        <Input 
                        placeholder={"search"}
                        event={(e) => setSearchedProduct(e.target.value)} 
                        
                        value={searchedProduct}/>
                    </div>
                    
                </div>
                
                <div className="text-2xl p-4 flex sm:hidden w-1/2 sm:w-auto flex-row items-center justify-end gap-2">
                    <LuMenu className="w-9 h-9 cursor-pointer" onClick={()=>{setMenu(!menu)}} />
                </div>
                
               
                <div className="w-full sm:w-1/3 h-full hidden xl:flex items-center justify-center gap-10 ">
                    <div className="flex sm:hidden flex-row items-center justify-center  ">
                        <Button icon={"search"} text={"Search"}  event={()=>{}}/>
                    </div>
                     <div className="flex  flex-row items-center justify-center  ">
                        <Button text={"User"} icon={"user"}/>
                    </div>
                     <div className="flex flex-row items-center justify-center  ">
                        <Button text={"Chats"} icon={"message"}/>
                    </div>
                    
                   
                </div>
                <div className="lg:flex hidden items-center justify-center w-[250px] h-full">
                    <div className="w-[200px] h-14 hidden flex-none lg:flex flex-row items-center justify-center  ">
                        <Button text={"Submit post"} bg={"bg-orng-md"} event={()=>{}}/>
                    </div>
                </div>   
            </div>
            <div className={`fixed top-0 left-0 z-30 ${purchasePage ? "flex" : "hidden"} felx-col items-center justify-center bg-orng-2xsm w-full h-full scroll-hidden `} >
                <ProductPurchasePage productClicked={productClicked} setPurchasePage={setPurchasePage}/>
            </div>
            <div className={`fixed w-full h-full flex items-center justify-center transform duration-600 ${menu ? "flex" : "hidden"} bg-gray-800/50 z-30`}>
                    
                    <div className={`flex relative sm:hidden flex-col items-center justify-center w-[300px] h-[500px] bg-orng-xsm`}>
                        <LuCross onClick={()=>{setMenu(!menu)}} className=" absolute top-5 left-5 h-8 w-8 rotate-45 textg-black transform duration-300 hover:scale-110"/>
                        <div className="flex sm:hidden flex-row items-center justify-center  text-2xl">
                            <Button icon={"search"} text={"Search"}  event={()=>{}}/>
                        </div>
                        <div className="flex  flex-row items-center justify-center text-2xl ">
                            <Button text={"User"} icon={"user"}/>
                        </div>
                        <div className="flex flex-row items-center justify-center text-2xl ">
                            <Button text={"Chats"} icon={"message"}/>
                        </div>
                    </div>
                </div>
            <div className=" w-full h-full flex flex-row items-center justify-center bg-orng-2xsm mt-20">
                <div className={`bg-orng-2xsm border-r-2 shadow border-orng-sm fixed w-full z-24 max-w-[250px] min-w-24  h-full flex flex-col justify-start items-center transform duration-600 ${filter ? "left-0" : "-left-full"} top-20   `}>
                    <div className=" w-[80%] pt-8 pb-8 border-b-2 border-orng-sm">
                        <Dropdown setLocation={setLocation} Locations={[...allLocations]} placeHolder={"city"}/>
                    </div>
                    <div className=" w-[80%] pt-8 pb-8  pl-2 border-b-2 border-orng-sm">
                        <Content title={"category"} allCntnt={[...allCategory]} setCntnt={setCategory}/>
                    </div>
                    <div className=" w-[80%] pt-8 pb-8 border-b-2 border-orng-sm">
                        <PriceFilter value={priceFilter} event={setPriceFilter} max={maxPrice} min={0}/>
                    </div>
                </div>
                <div className="sm:w-auto w-full h-full flex items-start justify-center overflow-y-scroll  bg-orng-2xsm scroll-hidden">
                    <ProductPanel productClicked={handleProduct} products={filteredProducts}/>
                </div>
            </div> 
        </div>
    )
}