import React, { useState, useEffect } from "react";

function Fav({ ifsc }) {
	const [fav, setfav] = useState("black");
	const [storefav, setStorefav] = useState(localStorage.getItem(ifsc) || "");
	// console.log(data);
	useEffect(() => {
		localStorage.setItem(ifsc, storefav);
		if (storefav !== "" && storefav === ifsc) {
			setfav("red");
		}
	}, [storefav]);

	const handleFav = () => {
		if (fav === "black") {
			setfav("red");
			setStorefav(ifsc);
		} else {
			setfav("black");
			setStorefav("");
		}
	};

	return (
		<div>
			<i class="fas fa-heart" style={{ color: fav }} onClick={handleFav}></i>
		</div>
	);
}

export default Fav;
