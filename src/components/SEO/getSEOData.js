export const getSEODataByPath = (seoPagesData, pathname) => {
    const matchedPage = seoPagesData.find((page) => page.path === pathname);

    if (matchedPage) {
        const seoData = matchedPage.seoInfo?.[0]; // first SEO entry in the array
        console.log("Matched SEO Data:", seoData);
        return seoData;
    }

    // console.warn("No Page found for path:", pathname);
    return seoPagesData.find((page) => page.path === "/")?.seoInfo?.[0]; // fallback to home page
};
