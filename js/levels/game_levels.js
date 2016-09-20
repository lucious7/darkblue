var GAME_LEVELS = [
  ["                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                  ###           ",
   "                                                   ##      ##    ##!##          ",
   "                                    o o      ##                  #!!!#          ",
   "                                                                 ##!##          ",
   "                                   #####                          #v#           ",
   "                                                                            ##  ",
   "  ##                                      o o                                #  ",
   "  #                     o                                                    #  ",
   "  #                                      #####                             o #  ",
   "  #          ####       o                                                    #  ",
   "  #  @       #  #                                                #####       #  ",
   "  ############  ###############   ####################     #######   #########  ",
   "                              #   #                  #     #                    ",
   "                              #!!!#                  #!!!!!#                    ",
   "                              #!!!#                  #!!!!!#                    ",
   "                              #####                  #######                    ",
   "                                                                                ",
   "                                                                                "],
  ["                                      #!!#                        #######                                    #!#  ",
   "                                      #!!#                     ####     ####                                 #!#  ",
   "                                      #!!##########           ##           ##                                #!#  ",
   "                                      ##!!!!!!!!!!##         ##             ##                               #!#  ",
   "                                       ##########!!#         #                                    o   o   o  #!#  ",
   "                                                ##!#         #     o   o                                    ##!#  ",
   "                                                 #!#         #                                ###############!!#  ",
   "                                                 #v#         #     #   #                        !!!!!!!!!!!!!!##  ",
   "                                                             ##  |   |   |  ##            #####################   ",
   "                                                              ##!!!!!!!!!!!##            v                        ",
   "                                                               ####!!!!!####                                      ",
   "                                               #     #            #######        ###         ###                  ",
   "                                               #     #                           # #         # #                  ",
   "                                               #     #                             #         #                    ",
   "                                               #     #                             ##        #                    ",
   "                                               ##    #                             #         #                    ",
   "                                               #     #      o  o     #   #         #         #                    ",
   "               #######        ###   ###        #     #               #   #         #         #                    ",
   "              ##     ##         #   #          #     #     ######    #   #   #########       #                    ",
   "             ##       ##        # o #          #    ##               #   #   #               #                    ",
   "     @       #         #        #   #          #     #               #   #   #               #                    ",
   "    ###      #         #        #   #          #     #               #   #####   ######      #                    ",
   "    # #      #         #       ## o ##         #     #               #     o     # #         #                    ",
   "!!!!# #!!!!!!#         #!!!!!!##     ##!!!!!!!!##    #!!!!!!!!!!     #     =     # #         #                    ",
   "!!!!# #!!!!!!#         #!!!!!##       ##########     #!!!!!!!##!     ############# ##  o o  ##                    ",
   "!!!!# #!!!!!!#         #!!!!!#    o                 ##!!!!!!## !                    ##     ##                     ",
   "!!!!# #!!!!!!#         #!!!!!#                     ##!!!!!!##  !                     #######                      ",
   "!!!!# #!!!!!!#         #!!!!!##       ##############!!!!!!##   !                                                  ",
   "!!!!# #!!!!!!#         #!!!!!!#########!!!!!!!!!!!!!!!!!!##    !                                                  ",
   "!!!!# #!!!!!!#         #!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!##     !                                                  "],
  ["                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                        o                                                                     ",
   "                                                                                                              ",
   "                                        #                                                                     ",
   "                                        #                                                                     ",
   "                                        #                                                                     ",
   "                                        #                                                                     ",
   "                                       ###                                                                    ",
   "                                       # #                 !!!        !!!  ###                                ",
   "                                       # #                 !#!        !#!                                     ",
   "                                     ### ###                #          #                                      ",
   "                                      #   #                 #   oooo   #       ###                            ",
   "                                      #   #                 #          #      #!!!#                           ",
   "                                      #   #                 ############       ###                            ",
   "                                     ##   ##      #   #      #                                                ",
   "                                      #   #########   ########              # #                               ",
   "                                      #   #           #                    #!!!#                              ",
   "                                      #   #           #                     ###                               ",
   "                                     ##   ##          #                                                       ",
   "                                      #   #= = = =    #            ###                                        ",
   "                                      #   #           #           #!!!#                                       ",
   "                                      #   #    = = = =#     o      ###       ###                              ",
   "                                     ##   ##          #                     #!!!#                             ",
   "                              o   o   #   #           #     #                ##v        ###                   ",
   "                                      #   #           #              #                 #!!!#                  ",
   "                             ### ### ### ###     o o  #!!!!!!!!!!!!!!#                   v#                   ",
   "                             # ### # # ### #          #!!!!!!!!!!!!!!#                                        ",
   "                             #             #   #######################                                        ",
   "                             ##           ##                                         ###                      ",
   "  ###                         #     #     #                                         #!!!#                ###  ",
   "  # #                         #    ###    #                                          ###                 # #  ",
   "  #                           #    ###    #######                        #####                             #  ",
   "  #                           #           #                              #   #                             #  ",
   "  #                           ##          #                              # # #                             #  ",
   "  #                                       #       |####|    |####|     ### ###                             #  ",
   "  #                ###             o o    #                              #         ###                     #  ",
   "  #               #####       ##          #                             ###       #!!!#          #         #  ",
   "  #               o###o       #    ###    #                             # #        ###          ###        #  ",
   "  #                ###        #############  # oo #    # oo #    # oo  ## ##                    ###        #  ",
   "  #      @          #         #           #!!#    #!!!!#    #!!!!#    ##   ##                    #         #  ",
   "  #############################           #############################     ################################  ",
   "                                                                                                              ",
   "                                                                                                              "],
  ["                                                                                                  ### #       ",
   "                                                                                                      #       ",
   "                                                                                                  #####       ",
   "                                                                                                  #           ",
   "                                                                                                  # ###       ",
   "                          o                                                                       # # #       ",
   "                                                                                             o o o### #       ",
   "                   ###                                                                                #       ",
   "       !  o  !                                                ##### ##### ##### ##### ##### ##### #####       ",
   "       #     #                                                #   # #   # #   # #   # #   # #   # #           ",
   "       #= o  #            #                                   ### # ### # ### # ### # ### # ### # #####       ",
   "       #     #                                                  # #   # #   # #   # #   # #   # #     #       ",
   "       !  o  !            o                                  #### ##### ##### ##### ##### ##### #######       ",
   "                                                                                                              ",
   "          o              ###                              ##                                                  ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                      ##                                                      ",
   "                   ###         ###                                                                            ",
   "                                                                                                              ",
   "                          o                                                     #      #                      ",
   "                                                          ##     ##                                           ",
   "             ###         ###         ###                                 #                  #                 ",
   "                                                                                                              ",
   "                                                                 ||                                           ",
   "  ###########                                                                                                 ",
   "  #         # o ######### o ######### o ##                                                #                   ",
   "  #         #   #       #   #       #   #                 ||                  #     #                         ",
   "  #  @      #####   o   #####   o   #####                                                                     ",
   "  #######                                     #####       ##     ##     ###                                   ",
   "        #=                  =                =#   #                     ###                                   ",
   "        #######################################   #!!!!!!!!!!!!!!!!!!!!!###!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "                                                  ############################################################",
   "                                                                                                              "]
];

if (typeof module != "undefined" && module.exports)
  module.exports = GAME_LEVELS;