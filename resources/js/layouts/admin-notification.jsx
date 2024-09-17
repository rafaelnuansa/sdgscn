import React from 'react'
import { Sheet, SheetContent, SheetHeader } from '@/components/custom/sheet'
import { Button } from '@/components/ui/button'
import { IconChecklist } from '@irsyadadl/paranoid'
export default function Notification({ openNotification, setOpenNotification }) {
    return (
        <>

            <Sheet open={openNotification} onOpenChange={setOpenNotification} className="">

                <SheetContent className="p-0 max-w-80">
                    <div className='fixed z-50 gap-4 bg-background shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 inset-y-0 right-0 h-full w-full border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm p-0 max-w-80'>

                    <div className="sticky top-0 z-10 border-b bg-background p-4">
                        <div className="grid gap-1.5 p-4 text-center sm:text-left">
                            <h2  className="text-base font-semibold leading-none tracking-tight vaul-scrollable">Notifications</h2>
                            <p className="text-sm text-muted-foreground">You have 20 unread notifications. Click on a notification to mark it as read.</p>
                          </div>

                          <Button size="sm"
                                ><IconChecklist className='size-4 mr-2'/>  Mark all as read</Button>
                    </div>
                    </div>
                </SheetContent>
            </Sheet>

            {/* <Dialog open={openNotification} onOpenChange={setOpenNotification} className="">
                <DialogContent>
                    <div className='fixed z-50 flex flex-col bg-drawer ring-1 ring-foreground/10 focus:outline-none inset-y-0 right-0 h-full w-screen max-w-80'>

                        <div className="sticky top-0 z-10 border-b bg-background p-4">
                            <div className="grid gap-1.5 p-4 text-center sm:text-left">
                                <h2 className="text-base font-semibold leading-none tracking-tight vaul-scrollable">Notifications</h2>
                                <p className="text-sm text-muted-foreground">You have 20 unread notifications. Click on a notification to mark it as read.</p>
                            </div>

                            <Button size="sm"
                            ><IconChecklist className='size-4 mr-2' />  Mark all as read</Button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog> */}
        </>
    )
}
