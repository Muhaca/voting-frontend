import APIResponse from "../models/ApiResponse";
import { ErrorMessage } from "../models/ErrorMessage";

export class AddKandidatAPIRequest {

    nama;
    user_id;

    setNama = (nama) => this.nama = nama;
    setUserId = (user_id) => this.user_id = user_id;

    generateRequestBody = () => {
        return {
            nama: this.nama,
            user_id: this.user_id
        };
    };

    fetch = async () => {
        console.log(JSON.stringify(this.generateRequestBody()));
        let url = process.env.REACT_APP_HOST_VOT + '/insertkandidat';
        let request = {
            method: 'POST',
            // headers: {
            //     'Authorization': `token = ` + this.token,
            //     'DT-SMSF-Datetime': this.datetime,
            //     'DT-SMSF-Signature': this.generateSignature(),
            // },
            body: JSON.stringify(this.generateRequestBody())
        };

        let error = ErrorMessage;
        let response = undefined;
        let data
            = {
            success: false,
            message: error.error_data_null
        };
        try {
            response = await fetch(url, request);
        } catch (err) {
            data = {
                message: error.error_failed_fetch,
                data: err
            };
        }
        if (response) data = await (new AddKandidatAPIResponse(response)).getData();
        return { response, data };
    };

}

export class AddKandidatAPIResponse extends APIResponse {
    validateResponse = () => {
        let error = ErrorMessage;
        if (this.status_code === 400) {
            this.setError(error.error_400);
            return;
        }
        if (this.status_code === 403) {
            this.setError(error.error_403);
            return;
        }
        if (this.status_code === 404) {
            this.setError(error.error_404);
            return;
        }
        if (!this.success) {
            this.setError(this.message);
            return;
        }
        if (!this.data) {
            this.setError(error.error_data_null);
            return;
        }
    };
}
