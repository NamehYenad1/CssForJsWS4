import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from "@/routes/Root.tsx";
import ErrorPage from "@/Components/ErrorPage";
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import './main.css'
import Sale from "@/routes/Sale.tsx";



const router = createBrowserRouter([
    {
        path:'/',
        element: <Root></Root>,
        errorElement:<ErrorPage/>,
        handle:{
            crumb:()=>{return{
                text:`Home`,
                path:`/`
            }}
        },

        children:[
            {
              path:'sale',
              element:<Sale/>,
                handle:{
                    crumb:()=>{return{
                        text:`Sale`,
                        path:`sale`
                    }}
                },
              children: [
                  {
                  path:':itemType',
                  element:<Sale/>,
                  loader: async ({ params }) => {
                      return params.itemType;
                  },
                      handle:{
                          crumb:(itemType:string)=>{return{
                              text:itemType,
                              path:`sale/${itemType}`
                          }}
                      },
                      children:[
                          {
                              path: ':itemSubType',
                              element: <Sale/>,
                              loader: async ({params}) => {
                                  return {itemType: params.itemType, itemSubType: params.itemSubType};
                              },
                              handle: {
                                  crumb: (itemObj: any) => {
                                      return {
                                          text: itemObj.itemSubType,
                                          path: `sale/${itemObj.itemType}/${itemObj.itemSubType}`
                                      }
                                  }
                              },
                          }
                      ]

              }
              ]
            },

        ]
    }
    ]
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
