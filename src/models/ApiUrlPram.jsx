import { cekLastCharUrl } from "./Format";

export class ApiUrlParam {

    setEmail(email) {
        this.email = email;
    }
    setKecamatan(kecamatan) {
        this.kecamatan = kecamatan;
    }
    setKelurahan(kelurahan) {
        this.kelurahan = kelurahan;
    }
    getParamUrl = (url) => {
        if (this.email) {
            url += cekLastCharUrl(url) + "email=" + this.email;
        }
        if (this.kecamatan) {
            url += cekLastCharUrl(url) + "kecamatan=" + this.kecamatan;
        }
        if (this.kelurahan) {
            url += cekLastCharUrl(url) + "kelurahan=" + this.kelurahan;
        }
        return url;
    };
}