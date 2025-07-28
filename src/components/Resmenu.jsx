import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import useResMenu from "../utils/useResMenu"
import Spinner from "./spinner"
import Menudetails from "./menuDet"
import { useState } from "react"

const Resmenu = () => {
  const [show, setShow] = useState(null);
  const [activeFilter, setActiveFilter] = useState(null);

  const { id } = useParams();
  const menu = useResMenu(id);

  if (menu == null) return <Spinner />;

  const { name } = menu.data.cards[2].card.card.info;
  const itemscard = menu.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
    each => each.card.card["@type"] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
  );

  // Debug log to check the structure
  const checkItemStructure = () => {
    const firstCategory = itemscard[0];
    if (firstCategory && firstCategory.card.card.itemCards) {
      console.log("First item structure:", firstCategory.card.card.itemCards[0].card.info);
    }
  };
  checkItemStructure();

  const filterItems = () => {
    if (!activeFilter) return itemscard;
  
    return itemscard
      .map(category => {
        // Filter itemCards within each category
        const filteredItems = category.card.card.itemCards.filter(item => {
          const itemInfo = item.card.info;
  
          // Check the active filter and apply conditions
          if (activeFilter === 'veg') {
            return itemInfo.isVeg === 1; // Veg items
          } else if (activeFilter === 'nonveg') {
            return itemInfo.isVeg === 0; // Non-veg items
          }
          return true; // Default case (no filter)
        });
  
        // If there are filtered items, return the modified category
        if (filteredItems.length > 0) {
          return {
            ...category,
            card: {
              ...category.card,
              card: {
                ...category.card.card,
                itemCards: filteredItems
              }
            }
          };
        }
        return null;
      })
      .filter(Boolean); // Remove null categories
  };
  
  const handleVegFilter = () => {
    setActiveFilter(activeFilter === 'veg' ? null : 'veg');
    setShow(null); // Close any open menus
  };
  
  const handleNonVegFilter = () => {
    setActiveFilter(activeFilter === 'nonveg' ? null : 'nonveg');
    setShow(null); // Close any open menus
  };
  
  const displayItems = filterItems();

  return (
    <div className="pt-28">
      <div className="text-center h-screen text-white">
        <h1 className="text-gray-600 font-serif font-bold text-6xl">{name}</h1>
        <div className="flex justify-evenly">
          <button 
            className={`text-lg p-2 text-black ${activeFilter === 'veg' ? 'bg-green-400' : 'bg-blue-300'} rounded-xl m-5`}
            onClick={handleVegFilter}
          >
            VEG {activeFilter === 'veg' && '✓'}
          </button>
          <button 
            className={`text-lg p-2 text-black ${activeFilter === 'nonveg' ? 'bg-red-400' : 'bg-blue-300'} rounded-xl m-5`}
            onClick={handleNonVegFilter}
          >
            NON VEG {activeFilter === 'nonveg' && '✓'}
          </button>
        </div>
        {displayItems.map((each, index) => (
          <Menudetails 
            key={each.card.card.title || index}
            item={each} 
            showItem={index === show}
            setShow={() => setShow(index === show ? null : index)}
          />
        ))}
        <Link to="/">
          <button className='bg-blue-400 p-2 rounded-lg text-white mt-5 my-4'>
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Resmenu;