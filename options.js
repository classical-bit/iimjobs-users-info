module.exports = {
  getOptionsForUser: (number) => {
    return {
      "crossDomain": true,
      "url": `https://searchsnode.iimjobs.com/api/v1/recruiter/87069/user/${number}/view`,
      "method": "POST",
      "headers": {
        "AuthToken": "5C1vKailP0Kqiw8PDSYvtHhHc72EpNL6Bpt1GxB2D6ICPBUmV62BB9NS0GWc0sYRgDHOE7+Yhi3jthSUSn3X8A==",
        "Content-Type": "application/x-www-form-urlencoded",
        "cache-control": "no-cache",
        "Postman-Token": "32409431-414f-4114-bb79-fb6095fde8d0"
      },
      "body": "logArgs=%7B%22eventName%22:%22sdbActionNViewProfile%22,%22origin%22:%22SearchResultPage%22,%22userAgent%22:%22Mozilla/5.0%20(Macintosh;%20Intel%20Mac%20OS%20X%2010_14_2)%20AppleWebKit/537.36%20(KHTML,%20like%20Gecko)%20Chrome/71.0.3578.98%20Safari/537.36%22%7D&queryArgs=%7B%22actionid%22:%221%22,%22allsearchkw%22:%22%22,%22anysearchkw%22:%22%22,%22desig%22:%220%22,%22differently_abled%22:%22-1%22,%22end%22:%2210%22,%22excsearchkw%22:%22%22,%22handle_team%22:%22-1%22,%22language%22:%22%22,%22maxage%22:%22-1%22,%22maxbatch%22:%22-1%22,%22maxexp%22:%22-1%22,%22maxsal%22:%22-1%22,%22minage%22:%22-1%22,%22minbatch%22:%22-1%22,%22minexp%22:%22-1%22,%22minsal%22:%22-1%22,%22notice_period%22:%22-1%22,%22noviewedprofile%22:%22false%22,%22planautoid%22:17521,%22planid%22:90,%22recid%22:%2287069%22,%22regions%22:%22%22,%22relocate%22:%22-1%22,%22resumelim%22:%222%22,%22searchkw%22:%22Brand%20manager%22,%22start%22:%220%22,%22subcat%22:%22%22,%22userid%22:%220%22,%22willing_travel%22:%22-1%22,%22work_permit%22:%22-1%22,%22parent_id%22:3801761,%22position%22:2%7D"
    };
  }
};
