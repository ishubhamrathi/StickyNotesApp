export function getColor(color: string) {
    const colors = {
        // blue: "bg-primary",
        // gray: "bg-secondary",
        // green: "bg-success", 
        // red: "bg-danger", 
        // yellow: "bg-warning", 
        // turquoise: "bg-info",
        // black: "bg-dark", 
        // white: "bg-light"
        blue : "bg-blue",
        gray: "bg-gray",
        green: "bg-green", 
        red: "bg-red", 
        yellow: "bg-yellow", 
        turquoise: "bg-turquoise",
        // black: "bg-black", 
        white: "bg-white"
    }

    for (let key in colors) {
        if (key === color) return colors[key];
        if (colors[key] === color) return key;
    }
}