
const Validate = {
  /**
   * 手机号校验
   */
  mobileCheck: (value) => {
    console.log('checkValue453',value)
   return /^[1][3,4,5,7,8][0-9]{9}$/.test(value)
  },

  /**
   * 身份证校验
   */
  IDCardCheck: (value) =>
    /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(
      value
    ),

  /**
   * 邮箱校验
   */
  emailCheck: (value) =>
    /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(value),
};

export default Validate;

