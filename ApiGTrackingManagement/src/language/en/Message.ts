export enum Message {
    test = "test",
    "permission_denied" = "Permission denied",
    "internal_server_error" = "Internal Server Error",
    "authorize_failed" = "Authorize failed",
    "token_incorect" = "Token incorrect",
    "system_error" = "System Error",
    "success" = "Successfully",
    "user_not_found" = "User not found!",
    "confirm_password" = "Confirm Password does not match!",
    "password_syntax_error" = "Password must be between 6 and 15 character!",
    "missing_parameter" = "Missing Paramter!",
    "user_existed" = "User existed in system!",
    "add_permission_error" = "Cannot add permission for user!",
    "missing_parameter_token" = "Missing parameter token !",
    "otpcode_has_expired" = "OTP Code has expired",
    "password_incorrect" = "Password is incorrect",
    "username_incorrect" = "Username is incorrect",
    "new_phone_number_exited" = "This phone number was exited in system !",
    "error_when_save_image" = "An error occurred while saving the image. Please try again letter !"
}

export default Message;