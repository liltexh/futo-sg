export default function useLoadinganimation() {
	function startLoading() {
		console.log("loading");
	}
	function stopLoading() {
		console.log("not loading");
	}

	return { startLoading, stopLoading };
}
