function theBeatlesPlay (musician, instruments){
  var finish = []
  for (var i = 0; i < 4; i++) {
    var finish = [...musician.slice(i), ...instruments.slice(i)]
    return finish
  }
}
