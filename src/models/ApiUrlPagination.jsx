import { ApiUrlParam } from "./ApiUrlPram";
import { cekLastCharUrl } from "./Format";

export class ApiUrlPagination extends ApiUrlParam {
    setPagination(show_pagination) {
        this.show_pagination = show_pagination;
        if (!this.show_pagination) {
            this.show_pagination = false;
        }
    }
    setPage(page) {
        this.page = page;
        if (!this.page) {
            this.page = 1;
        }
    }
    setPerPage(per_page) {
        this.per_page = per_page;
        if (!this.per_page) {
            this.per_page = 20;
        }
    }
    setSortBy(sort_by) {
        this.sort_by = sort_by;
    }
    setSortType(sort_type) {
        this.sort_type = sort_type;
    }

    getPaginationUrl = (url) => {
        if (this.show_pagination) {
            url += '?show_pagination=true';
            if (this.page) {
                url += cekLastCharUrl(url) + 'page=' + this.page;
            }
            if (this.per_page) {
                url += cekLastCharUrl(url) + 'per_page=' + this.per_page;
            }
            if (this.sort_by) {
                url += cekLastCharUrl(url) + 'sort_by=' + this.sort_by;
            }
            if (this.sort_type) {
                url += cekLastCharUrl(url) + 'sort_type=' + this.sort_type;
            }
        }
        url = this.getParamUrl(url);
        return (url);
    };
}