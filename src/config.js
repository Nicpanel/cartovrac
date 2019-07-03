// Bounds for display
export const minBoundS = -90;
export const minBoundW = -180;
export const maxBoundN = 90;
export const maxBoundE = 180;

// Map definition
export const maxZoom = 21;
export const minZoom = 3;
export const defaultZoom = 13;
export const defaultCenterLat = 59.86;
export const defaultCenterLng = 17.64;
export const attribution = 'Map data &copy; '+
			'<a href="http://openstreetmap.org">OpenStreetMap</a> contributors, '+
			'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, '+
			'Imagery © <a href="http://mapbox.com">Mapbox</a>';
export const mapToken = 'pk.eyJ1IjoiemVyb3dhc3RldXBwc2FsYSIsImEiOiJjanhrc3RydzUyZGkyM25tajRqdmo2YTR1In0.wZSzB6C2F_gachlo_C39Og'
export const mapUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}';
