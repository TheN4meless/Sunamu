export function secondsToTime(duration: number) {
	duration = Math.floor(duration);
	let seconds = duration % 60,
		minutes = Math.floor(duration / 60) % 60;

	return minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0");
}

export function fullscreen() {
	// @ts-ignore
	if (document.fullscreenElement || document.webkitFullscreenElement){
		if (document.exitFullscreen)
			document.exitFullscreen();
		// @ts-ignore
		else if (document.webkitExitFullscreen)
			// @ts-ignore
			document.webkitExitFullscreen();
	} else {
		if (document.documentElement.requestFullscreen)
			document.documentElement.requestFullscreen();
		// @ts-ignore
		else if (document.documentElement.webkitRequestFullscreen)
			// @ts-ignore
			document.documentElement.webkitRequestFullscreen();
	}
}

export function isElectron(): boolean{
	if (navigator.userAgent.toLowerCase().indexOf(" electron/") > -1) return true;
	return false;
}

export function debounce(callback: Function, time: number, leading: boolean = false, ...args: any[]): Promise<any> {
	let timer: number | undefined;
	return new Promise((resolve, reject) => {
		try{
			if (leading) {
				if (!timer)
					resolve(callback(...args));
			}

			window.clearTimeout(timer);

			timer = window.setTimeout(() => { 
				if(leading)
					timer = undefined;
				else
					resolve(callback(...args));
			}, time);
		}catch(e){
			reject(e);
		}
	});
}