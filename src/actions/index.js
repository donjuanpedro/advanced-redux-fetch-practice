export function loadContacts() {
    return function (dispatch) {
      dispatch({
        type: "CONTACTS_BEING_LOADED"
      });
      fetch("/contacts")
      .then( (response) => {
        return response.json();
      }).then((contacts) => {
          //this line of code means the fetch call is done
        dispatch(contactsLoaded(contacts));
      });
    };
   }
   export function contactsLoaded(contacts) {
    return {
      type: "CONTACTS_LOADED",
      value: contacts
    };
   }
   