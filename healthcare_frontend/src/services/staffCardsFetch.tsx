export const fetchTotalCards = (page: number): Promise<number> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (page === 1) {
                resolve(20);
            } else {
                resolve(50);
            }
        }, 1000);
    });
};
