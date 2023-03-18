export const ErrorMessage = {

    //server errors
    error_failed_fetch: 'Failed to Fetch',
    error_400: 'Error 400',
    error_403: 'Error 403',
    error_404: 'Error 404',
    error_data_null: 'data not found',

    // client errors
    error_username_empty: 'Email atau Nomor Handphone belum diisi',
    error_password_empty: 'Password belum diisi',
    error_ip_empty: 'Koneksi internet sedang bermasalah',
    error_email_wrong: 'Format email salah',
    error_email_empty: 'Email belum diisi',
    error_id_invalid_email_or_password: "Email atau password anda salah",
    error_id_invalid_username_not_registered: "Email atau nomor telepon anda belum terdaftar",
    error_id_your_account_has_been_locked: "Akun anda telah terkunci",
    error_id_email_and_phone_already_registered: "Email dan nomor handphone sudah terdaftar",
    error_id_ip_must_not_be_empty: "Koneksi internet anda bermasalah, silahkan reload kembali",
    error_id_name_already_registered: "Nama sudah terdaftar",
    error_id_notes_last_status_empty: "Last Status belum diisi",
    error_id_notes_status_empty: "Status belum diisi",
    error_id_notes_status_remarks_empty: "Status Remarks belum diisi",
    error_id_invalid_old_password: "Password lama anda salah",
    error_id_data_not_found: "Data tidak ditemukan",
    error_id_reason_code_must_not_be_empty: "Alasan reject belum dipilih",
    error_id_server_busy: "Server sedang sibuk",


    //API errors
    error_invalid_email_or_password: 'invalid email or password',
    error_response_your_account_has_been_locked: "your account has been locked",
    error_response_invalid_username_not_registered: "username not register",
    error_response_email_and_phone_already_registered: "email and phone already registered",
    error_response_ip_must_not_be_empty: "ip must not be empty",
    error_response_name_already_registered: "name already registered",
    error_response_invalid_old_password: "invaid old password",
    error_data_not_found: "data not found",
    error_reason_code_must_not_be_empty: "reason_code must not be empty",
    error_server_busy: "server busy. please try again in a few minutes",

    //function message
    getError: function (error) {
        let err = error;

        if (error === this.error_server_busy) {
            err = this.error_id_server_busy;
        }
        if (error === this.error_reason_code_must_not_be_empty) {
            err = this.error_id_reason_code_must_not_be_empty;
        }
        if (error === this.error_invalid_email_or_password) {
            err = this.error_id_invalid_email_or_password;
        }
        if (error === this.error_response_invalid_username_not_registered) {
            err = this.error_id_invalid_username_not_registered;
        }
        if (error === this.error_response_your_account_has_been_locked) {
            err = this.error_id_your_account_has_been_locked;
        }
        if (error === this.error_response_email_and_phone_already_registered) {
            err = this.error_id_email_and_phone_already_registered;
        }
        if (error === this.error_response_ip_must_not_be_empty) {
            err = this.error_id_ip_must_not_be_empty;
        }
        if (error === this.error_response_name_already_registered) {
            err = this.error_id_name_already_registered;
        }
        if (error === this.error_response_invalid_old_password) {
            err = this.error_id_invalid_old_password;
        }
        if (error === this.error_data_not_found) {
            err = this.error_id_data_not_found;
        }
        return err;
    }

};
