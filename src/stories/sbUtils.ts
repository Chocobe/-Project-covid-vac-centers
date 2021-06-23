function sbDescription(...messages: string[]): string {
	return messages.reduce((result, curMsg) => {
		return result.concat("<br/>").concat(curMsg);
	});
}

export { sbDescription };
