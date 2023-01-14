export const maxUsersPerPage = 6

export const setPage = (pageFn: string, page: number) => {

    const maxUsers = 36
    let endPage = maxUsers / maxUsersPerPage

    if (pageFn === 'NextPage') {
        if (page < endPage) {
            page = page + 1
        }
    }

    if (pageFn === 'PreviousPage') {
        if (page > 1) {
            page = page - 1
        }
    }

    if (pageFn === 'FirstPage') {
        page = 1
    }

    if (pageFn === 'LastPage') {
        page = endPage
    }

    return page;
}