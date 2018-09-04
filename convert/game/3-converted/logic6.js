window.logic6 = function()
{
  while(1) {
    switch (jumptoLine)
  {
    case 0:
if (cmd_isset(5)) {
  cmd_load_pic(0);
  cmd_draw_pic(0);
  cmd_discard_pic(0);
  cmd_set_horizon(15);
  cmd_load_view(7);
  if (cmd_equaln(1,3)) {
    cmd_position(0, 110, 21);
  }
  cmd_assignn(200, 6);
  if (cmd_obj_in_room("Front door key",200)) {
    cmd_animate_obj(2);
    cmd_set_view(2, 7);
    cmd_set_loop(2, 0);
    cmd_set_cel(2, 1);
    cmd_position(2, 45, 72);
    cmd_draw(2);
    cmd_stop_cycling(2);
  }
  if (cmd_isset(208)) {
    cmd_add_to_pic(7, 0, 4, 66, 45, 4, 0);
    cmd_add_to_pic(7, 0, 5, 66, 71, 4, 0);
  }
  cmd_draw(0);
  cmd_show_pic();
  cmd_assignn(100, 0);
}
if ((cmd_said(13) || cmd_said(13, 14))) {
  cmd_print(1);
  cmd_assignn(200, 6);
  if (cmd_obj_in_room("Front door key",200)) {
    cmd_print(2);
  }
}
if (cmd_said(13, 47)) {
  cmd_print(3);
  if (cmd_obj_in_room("Front door key",200)) {
    cmd_print(4);
  }
}
if (cmd_said(13, 55)) {
  cmd_print(5);
}
if (cmd_said(13, 56)) {
  cmd_assignn(200, 255);
  if (!cmd_obj_in_room("Flower",200)) {
    cmd_print(6);
    jumpTo(1);
break;
  }
  cmd_reset(4);
}
case 1:
if ((cmd_said(13, 18) || cmd_said(13, 19) || cmd_said(13, 20) || cmd_said(13, 57) || cmd_said(13, 27) || cmd_said(13, 21))) {
  cmd_print(7);
}
if (cmd_said(13, 28, 19)) {
  cmd_print(8);
  cmd_print(9);
}
if (!(cmd_said(31, 56))) {
  jumpTo(500);
  break;
}
  cmd_assignn(200, 255);
  if (!(!cmd_obj_in_room("Flower",200))) {
  jumpTo(501);
  break;
}
    if (!(cmd_posn(0,40,78,58,91))) {
  jumpTo(502);
  break;
}
      cmd_print(10);
      cmd_increment(3);
      cmd_get("Flower");
      jumpTo(2);
break;
    case 502:
    cmd_print(11);
case 2:
    jumpTo(3);
break;
  case 501:
  cmd_print(12);
case 500:
case 3:
if ((cmd_said(58) || cmd_said(58, 56))) {
  cmd_print(13);
}
if (cmd_said(31, 55)) {
  cmd_print(14);
}
if (!(cmd_said(31, 59))) {
  jumpTo(503);
  break;
}
  cmd_assignn(200, 6);
  if (!(cmd_obj_in_room("Front door key",200))) {
  jumpTo(504);
  break;
}
    if (!(cmd_posn(0,40,82,55,91))) {
  jumpTo(505);
  break;
}
      cmd_print(15);
      cmd_increment(3);
      cmd_get("Front door key");
      cmd_erase(2);
      jumpTo(4);
break;
    case 505:
    cmd_print(11);
case 4:
    jumpTo(5);
break;
  case 504:
  cmd_print(16);
case 503:
case 5:
if (cmd_said(13, 59)) {
  cmd_assignn(200, 6);
  if (cmd_obj_in_room("Front door key",200)) {
    cmd_print(17);
    jumpTo(6);
break;
  }
  cmd_reset(4);
}
case 6:
if (cmd_isset(3)) {
  if (cmd_equaln(6,1)) {
    cmd_addn(100, 1);
    if (cmd_equaln(100,8)) {
      cmd_assignn(100, 0);
      cmd_assignn(101, 255);
      cmd_assignn(102, 255);
      cmd_reposition(0, 101, 102);
    }
  }
  if (cmd_equaln(6,5)) {
    cmd_addn(100, 1);
    if (cmd_equaln(100,8)) {
      cmd_assignn(100, 0);
      cmd_assignn(101, 1);
      cmd_assignn(102, 1);
      cmd_reposition(0, 101, 102);
    }
  }
}
if (cmd_posn(0,55,70,75,75)) {
  cmd_position(0, 73, 157);
  cmd_new_room(10);
if (AGI.break_all_logics) return;
}
if (cmd_posn(0,10,30,20,160)) {
  cmd_position(0, 140, 124);
  cmd_new_room(8);
if (AGI.break_all_logics) return;
}
if (cmd_posn(0,50,154,72,160)) {
  cmd_print(18);
  cmd_position(0, 98, 80);
  cmd_new_room(7);
if (AGI.break_all_logics) return;
}
if (cmd_equaln(2,1)) {
  cmd_new_room(3);
if (AGI.break_all_logics) return;
}
return;

}}}
MESSAGES[6]=[
"",
"You are standing in the downstairs hallway. Further up the hallway the kitchen is visible and to the left is the living room.",
"You notice a key on the table.",
"On the table is a vase containing a large bunch of flowers.",
"You also notice a key on the table.",
"The vase contains a beautiful bunch of flowers.",
"The beautiful bunch of flowers help to brighten up the otherwise dull room.",
"Its just as it appears.",
"You look under the rug and find.....",
"absolutely nothing.",
"You take a single flower from the bouquet.",
"You'll need to get closer.",
"But, you've already got a flower!",
"The flowers give a pleasing fragrance to the room.",
"But where would you put the flowers?",
"Taken.",
"But, you've already got the it!",
"You notice your front door key on the table.",
"You open the front door and step outside."];
CONTROLS[6]="?4?4?4?4?4?4?4?4?4?4?4>.{5>9>.{5>9>.{5>9>.{5`5<.U>.{5`A<.P>.{5$5<.P>.{5$5<.P>.{5$5<.P>.,5`5<.P>.,5`A<.K>.,5$5<.K>.,5$5<.K>.,5$5<.K>.,5$5<.K>.,5$5<.K>.,5$5<.K>.,5$5<.K>.,5$5<.K>.,5$5<.K>.,5$A<.E>.,5)5<.E>.,5)5<.E><45$5<.E><45$5<.E><45$A<.9><45)5<.9><45)5<.9<.^}.U5)5<.9<.^5+5.U5)5<.9<.^5+5.U5)5<.9<.^5+5.U5)5<.9<.^5+5.U5)5<.9<.^5+5.U5)5<.9<.^5+5.U5)5<.9<.^5+5.U5)A<.4<.^5+5.U5[5<.4<.^5+5.U5[5<.4<.^5+5.Z5)5<.4<P5.g5+5.Z5)5<.4<P5.g5+5.Z5)5<.4<P5.g5+5.Z5)A<,<P5.g5+5.Z5[5<,<45K5.g5+5.Z5[5<,<45K5.g5+5.Z5[5<,<45K5.g5+5.Z5[5<,<45K5.g5+5.Z5[5<,<45K5.g5+5.Z5[A<{<45K5.g5+5.Z5:5<{<45K5.g5+5.Z5:5<{<45K5.g5+5.Z5:5<{<45K5.g5+5.Z5:5<{<45K5.g5+5.g5[5<{<45K5.g5+5.g5[5<{<45K5.g5+5.g5[5<{<45K5.g5+5.g5[5<{<45K5.95U5+5.g5[5<{<45K5.95U5+5.g5[5<{<45K5.45Z5+5.g5[5<{<45K5.45Z5+5.g5:5<+<45K5.45Z5+5.g5:5<+<45K5,5g5+5.g5:5<+<45K5,5g5+5.g5:5<+<45K5{5l5+5.g5:5<+<45K5ghl5+5.g5:5<+<45K5.g5+5.g5:5<+<45K5.g5+5.l5[5<+<45K5.9a+=!5:5<^<45K5.95<45!5:5<^<45K5.45<E5x5:5<^<45K5.45<E5x5:5<^<45K5.45<E5x5:5<^<45K5,5<K5x5:5<^<45K5,5<P5r5:5<^<45K5,5<P5r5:5<^<45K5,5<P5r5.25<!<45K5{5<Z5r5:5<!<45K5Zm<Z5r5:5<!<45K5U5<,5r5:5<!<45K5U5<,5r5:5<!<45K5P5<.95l5:5<!<45K5P5<.95l5:5<!<45K5K5<.E5r5[A<x<45K5K5<.E5r5:5<x.P*K5E5<.P5l5.25<r<45K5E5<.P5l5.25<r<45K595<.U5l5.25<r<45K595<.Z5g5.25<r<45KA<.g5g5.25<r<45KA<.g5g5.25<r<45K5<.l5g5.25<r<4Q<.r5Z5.25<r>.{5Z5.25<r>.{5Z5.75<l>.,5U5.75<l>.,5U5.75<l>.,5U5.75<l>.,5P5.C5<l><45K5.C5<l><45K5.H5<g><45K5.H5<g><45K5.H5<g><95E5.N5<Z><95E5.S5<U><95E5.S5<U><95E5.S5<U><95E5.Z5<P><95E5.Z5<P.Ph>U5E5.Z5<P.!5>UL.Z5<P.xA><45<K.x5><95<K.rA><95<K.r5><E5<K.r5><E5<K.l5><P5<E.l5><P5<E.g5><U5<E.g5><U5<E.Z5><g5<9.Z5><g5<9.UA><g5<9.U5><l5<9.PA><l5<9.P5><x5<4.P5><x5<4.K5><!5<4.K5><!5<4.E5><+5.,.E5><+5.,.E5><+5.,.95><{5.,.95><{5.,.95><,5.{.45><.45.{.45><.45.{.45><.45.{,5><.E5.+,<L>,5.+<.E5.^<.L.+<.E5.^5>.4<.E5.^5>.4<.E5.^5>.4<.E5.^5>.4<.E5.^5>.4<.E5.^5>.4<.E5.^5>.4<.95.+5>.4<.95.+5>.4<.95.+5>.4<.95.+5>.4<.95.+5>.4<.95.+5>.4<.95.+5>.4<.95.+5>.4<.9.}>.4?4?4";