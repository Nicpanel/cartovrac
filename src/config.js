// Bounds for display
export const minBoundS = -90;
export const minBoundW = -180;
export const maxBoundN = 90;
export const maxBoundE = 180;

// Map definition
export const maxZoom = 21;
export const minZoom = 3;
export const defaultZoom = 6;
export const defaultCenterLat = 47;
export const defaultCenterLng = 2;
export const attribution = 'Map data &copy; '+
			'<a href="http://openstreetmap.org">OpenStreetMap</a> contributors, '+
			'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, '+
			'Imagery © <a href="http://mapbox.com">Mapbox</a>';
export const mapToken = 'pk.eyJ1IjoidnJhY2FuYW50ZXMiLCJhIjoiY2prZ21vaWMxMDVxZTNwcm5wZ29vbmY2aCJ9.cBMOReBbeqSWQA3nWsGnuw';
export const mapUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}';
