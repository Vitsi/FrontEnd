// api.ts
export const fetchTotalCards = (page: number): Promise<number> => {
    return new Promise((resolve, reject) => {
        // Simulate API delay
        setTimeout(() => {
            if (page === 1) {
                resolve(20);
            } else {
                resolve(50);
            }
        }, 1000);
    });
};
