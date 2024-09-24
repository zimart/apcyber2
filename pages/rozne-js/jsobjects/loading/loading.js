export default {
	setupPage: async () => {
		try {
			const data = await validateUser.run();
			if (data.length > 0) {
				// run actual data fetching logic
				// Show the dashboard tab
				MenuOp.changeMenu('2');
			} else {
				// Go to login
				MenuOp.changeMenu('3');
			}
		} catch(e) {
			// NavigateTo some other page that shows error
			MenuOp.changeMenu('3');
		}
	}
}