import BackgroundText from "./BackgroundText";
import CategoryBtn from "./CategoryBtn";
import { useState } from "react";
import './portfolio.css';
import Nashville from '../Images/Nashville.jpg';
import League from '../Images/League.jpg';
import Bikes from '../Images/Bikes.jpg';

function Portfolio(){
    const [filter, setFilter] = useState('all');
    const products = [
        { id: 1, name: 'Nashville City Datahouse', category: ['SQL', 'PowerBi'], categoryValue: "SQL, PowerBi", image: `${Nashville}`, description: "Unlocking actionable insights through a comprehensive data analysis of Nashville's diverse datasets.", href: "https://github.com/AH-2002/Nashville-data-house"},
        { id: 2, name: 'Top 5 Leagues', category: ['Python', 'PowerBi'],categoryValue: "Python, PowerBi", image: `${League}`, description: "A thorough study of top 5 football leagues' stats promises deep insights, enhancing our understanding of the game.", href: "https://github.com/AH-2002/Top-5-Leagues"},
        { id: 3, name: 'Bikes sales', category: 'Excel',categoryValue: "Excel", image: `${Bikes}`, description: "Delving into comprehensive bike sales data analysis, revealing valuable insights for strategic decision-making.", href: "https://github.com/AH-2002/Bike-Sales"}
        ];
    let filteredProducts;
    if(filter === 'all'){
        filteredProducts = products;
    }
    else{
        filteredProducts = products.filter((product) =>
        product.category.includes(filter)
  );

    }
    return(
        <section className="portfolio bg-dark" id="portfolio">
            <div className="container">
                <BackgroundText value1="My Work" value2="PORTFOLIO"/>
                <div className="portfolio-info">
                    <div class="category-buttons">
                        <CategoryBtn filter={() => setFilter('all')} value="All"/>
                        <CategoryBtn filter={() => setFilter('Python')} value="Python"/>
                        <CategoryBtn filter={() => setFilter('Excel')} value="Excel"/>
                        <CategoryBtn filter={() => setFilter('SQL')} value="SQL"/>
                        <CategoryBtn filter={() => setFilter('PowerBi')} value="PowerBi"/>
                    </div>
                    <div className="portfolio-cards row text-center">
                            {filteredProducts.map(product => (
                                <a key={product.id} href={product.href} target="_blank" className={`portfolio-card col-lg-4 col-md-6 col-sm-12 ${product.category}`}>
                                    <div className="card-img">
                                        <div className="img-hover"></div>
                                        <img src={product.image}/>
                                    </div>
                                    <div className="card-info">
                                        <h3>{product.name}</h3>
                                        <p>{product.description}</p>
                                        <p>{product.categoryValue}</p>
                                    </div>
                                </a>
                                ))}
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Portfolio;