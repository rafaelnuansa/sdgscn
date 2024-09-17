import { router } from '@inertiajs/react';
import swal from 'sweetalert';

export default function useSwal() {
  const ask = ({ url, message = 'Are you sure?', method = 'post', data = null }) => {
    swal({
      title: message,
      buttons: {
        cancel: {
          text: 'No',
          value: false,
          visible: true,
          closeModal: true,
        },
        confirm: {
          text: 'Yes',
          value: true,
          closeModal: true,
        },
      },
      icon: 'warning',
      dangerMode: true,
    }).then((confirmed) => {
      if (confirmed) {
        if (method === 'post') {
          router.post(url, data, {
            preserveScroll: true,
          });
        } else if (method === 'put') {
          router.put(url, data, {
            preserveScroll: true,
          });
        } else if (method === 'delete') {
          router.delete(url, {
            preserveScroll: true,
          });
        } else {
          console.error(`Unsupported HTTP method: ${method}`);
        }
      }
    });
  };

  return { ask };
}
