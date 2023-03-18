import APIResponse from "../models/ApiResponse";
import { ErrorMessage } from "../models/ErrorMessage";
import { ApiUrlPagination } from "../models/ApiUrlPagination";

export class GetKelurahanAPIRequest extends ApiUrlPagination {

    fetch = async () => {
        let url = process.env.REACT_APP_HOST_VOT + '/getkelurahan/get';
        url = this.getPaginationUrl(url);
        let request = {
            method: 'GET',
            // headers: {
            //     'Authorization': `token = ` + this.token,
            //     'DT-SMSF-Datetime': this.datetime,
            //     'DT-SMSF-Signature': this.generateSignature(),
            // },
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
        if (response) data = await (new GetKelurahanAPIResponse(response)).getData();
        return { response, data };
    };

}

export class GetKelurahanAPIResponse extends APIResponse {
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
