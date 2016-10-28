import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  name: 'Home_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Home_Page' });
  },
});

FlowRouter.route('/user-profile', {
  name: 'User_Profile_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'User_Profile_Page' });
  },
});

FlowRouter.route('/botanodex', {
  name: 'Botanodex_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Botanodex_Page' });
  },
});

FlowRouter.route('/species/', {
  name: 'Species_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Species_Page' });
  },
});

FlowRouter.route('/plant-locations', {
  name: 'Plant_Locations_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Plant_Locations_Page' });
  },
});

FlowRouter.route('/plant-profile/', {
  name: 'Plant_Profile_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Plant_Profile_Page' });
  },
});

FlowRouter.route('/list', {
  name: 'List_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'List_Stuff_Page' });
  },
});

FlowRouter.route('/add', {
  name: 'Add_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Add_Stuff_Page' });
  },
});

FlowRouter.route('/stuff/:_id', {
  name: 'Edit_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Edit_Stuff_Page' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_Body', { main: 'App_Not_Found' });
  },
};
