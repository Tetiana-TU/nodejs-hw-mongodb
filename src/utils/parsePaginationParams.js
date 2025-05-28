const parseNumber = (number, defaultValue) => {
  const parsed = parseInt(number);
  return Number.isNaN(parsed) ? defaultValue : parsed;
};

// const parseNumber = (number, defaultValue) => {
//   if (typeof number === 'string') {
//     const parsedNumber = parseInt(number);
//     if (Number.isNaN(parsedNumber)) {
//       return defaultValue;
//     }
//     return parsedNumber;
//   }

//   return defaultValue;
// };
// export const parsePaginationParams = (query) => {
//   const {
//     page,
//     perPage,
//     totalItems,
//     totalPages,
//     hasPreviousPage,
//     hasNextPage,
//   } = query;

//   const parsedPage = parseNumber(page, 2);
//   const parsedPerPage = parseNumber(perPage, 4);
//   const parsedtotalItems = parseNumber(totalItems, 6);
//   const parsedtotalPages = parseNumber(totalPages, 2);

//   const parsedhasPreviousPage =
//     hasPreviousPage === 'true' || hasPreviousPage === true;
//   const parsedhasNextPage = hasNextPage === 'true' || hasNextPage === true;
//   return {
//     page: parsedPage,
//     perPage: parsedPerPage,
//     totalItems: parsedtotalItems,
//     totalPages: parsedtotalPages,
//     hasPreviousPage: parsedhasPreviousPage,
//     hasNextPage: parsedhasNextPage,
//   };
// };
export const parsePaginationParams = (query) => {
  const parsedPage = parseNumber(query.page, 1);
  const parsedperPage = parseNumber(query.perPage, 10);
  return { page: parsedPage, perPage: parsedperPage };
};
