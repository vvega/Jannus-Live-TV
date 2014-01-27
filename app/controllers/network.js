exports.wifiConnectivity = function() {
	return (Ti.Network.getNetworkType() == Ti.Network.NETWORK_WIFI) ? true : false;
};

