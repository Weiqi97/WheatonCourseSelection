/**
 * The function to convert the form into json.
 * @returns {{string: string}} - The form converted to json.
 */
export function jsonifyForm () {
  const form = {}
  $.each($('form').serializeArray(), function (i, field) {
    form[field.name] = field.value || ''
  })
  return form
}

/**
 * Send the ajax request.
 * @param {string} url - The url to post.
 * @param {{string: string}} form - The form data packed into an object.
 * @returns {jQuery.Ajax} - An jQuery Ajax object.
 */
export function sendAjaxRequest (url, form) {
  return $.ajax({
    url: url,
    type: 'POST',
    data: JSON.stringify(form),
    contentType: 'application/json; charset=utf-8'
  })
}

/**
 * Fill user's selection into a hidden form for back end.
 * @returns {void} - This function has no return.
 */
export function fillHiddenData () {
  $('#area-value').val($('#area').val())
  $('#division-value').val($('#division').val())
  $('#semester-value').val($('#semester').val())
  $('#subjects-value').val($('#subjects').val())
  $('#foundation-value').val($('#foundation').val())
}

/**
 * Check if any subject was selected.
 * @returns {boolean} - True if no subject selected, otherwise false.
 */
export function checkSelectedSubjects () {
  // Get selected subjects from the drop down.
  const subjects = $('#subjects').val()
  // Check if no subject was selected.
  return subjects.length === 0
}

/**
 * Alert users that no subject was selected.
 * @returns {void} - This function has no return.
 */
export function subjectsError () {
  // Specify the alert details.
  $.confirm({
    type: 'red',
    icon: 'fas fa-exclamation-triangle',
    theme: 'modern',
    title: 'No subject selected!',
    content: 'Please click on the subject(s) drop down and select at least one subject.',
    buttons: {
      confirm: {
        text: 'Got it!',
        btnClass: 'btn-info'
      }
    }
  })
}

/**
 * Alert users when then add a class with no assigned time to calendar.
 * @returns {void} - This function has no return.
 */
export function classTimeTBAError () {
  // Specify the alert details.
  $.confirm({
    type: 'red',
    icon: 'fas fa-exclamation-triangle',
    theme: 'modern',
    title: 'Error!',
    content: 'This class does not have an assigned time.',
    buttons: {
      confirm: {
        text: 'Got it!',
        btnClass: 'btn-info'
      }
    }
  })
}
