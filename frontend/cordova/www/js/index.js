/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false)

function onDeviceReady() {
  // Cordova is now initialized. Have fun!

  console.log('Running cordova-' + cordova.platformId + '@' + cordova.version)
  document.getElementById('deviceready').classList.add('ready')
  // Use your own connect token API endpoint, this one only list sandbox connectors
  // Example Reference: https://github.com/pluggyai/quickstart/tree/master/examples/vercel-node-connect-token
  fetch('https://my-own-api.vercel.app/api/token', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      options: {
        clientUserId: 'user@example.com',
      },
    }),
  })
    .then((response) => response.json())
    .then(({ accessToken }) => {
      const pluggyConnect = new PluggyConnect({
        connectToken: accessToken,
        includeSandbox: true,
        onSuccess: (itemData) => {
          // TODO: Implement logic for succesful connection
          // The following line is an example, it should be removed when implemented.
          console.log('Yay! Pluggy connect success!', itemData)
        },
        onError: (error) => {
          // TODO: Implement logic for error on connection
          // The following line is an example, it should be removed when implemented.
          console.error('Whoops! Pluggy Connect error... ', error)
        },
      })
      pluggyConnect.init()
    })
}
